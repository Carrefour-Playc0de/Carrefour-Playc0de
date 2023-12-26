import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburPanaderiaPanificados extends BasePage {

    readonly PANIFICADOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PANIFICADOS = this.page.locator('//a [@id="menu-item-category-panificados"]')
    }

    async clickPanaderiaPanificados(): Promise<void> {
        await this.click(this.PANIFICADOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburPanaderiaPanificados(): Promise<void> {
        await this.clickPanaderiaPanificados()
    }
}
