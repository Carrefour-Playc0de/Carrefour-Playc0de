import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburElectroTecnologiaImpresorasCartuchos extends BasePage {

    readonly IMPRESORAS_CARTUCHOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.IMPRESORAS_CARTUCHOS =this.page.locator('//a [@id="menu-item-category-impresoras"]')
    }

    async clickElectroTecnologiaImpresorasCartuchos(): Promise<void> {
        await this.click(this.IMPRESORAS_CARTUCHOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburElectroTecnologiaImpresorasCartuchos(): Promise<void> {
        await this.clickElectroTecnologiaImpresorasCartuchos()
    }
}
