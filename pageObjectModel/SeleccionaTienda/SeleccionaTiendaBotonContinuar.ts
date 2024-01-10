import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class SeleccionaTiendaBotonContinuar extends BasePage {
    readonly CONTINUAR: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CONTINUAR = this.page.locator('//button [@id="rl-step2"]')
    }

    async clickSelecTiendaBotonContinuar(): Promise<void> {
        await this.click(this.CONTINUAR)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForLoadState("domcontentloaded")
    }

    async navigateToSelecTiendaBotonContinuar(): Promise<void> {
        await this.clickSelecTiendaBotonContinuar()
    }
}
