import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburElectroTecnologiaLavado extends BasePage {

    readonly LAVADO: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.LAVADO =this.page.locator('//a [@id="menu-item-category-lavado"]')
    }

    async clickElectroTecnologiaLavado(): Promise<void> {
        await this.click(this.LAVADO)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburElectroTecnologiaLavado(): Promise<void> {
        await this.clickElectroTecnologiaLavado()
    }
}
